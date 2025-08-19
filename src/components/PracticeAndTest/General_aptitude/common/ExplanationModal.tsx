import React, { useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { Alert, AlertDescription } from '../../../../components/ui/alert';
import { 
  X, 
  HelpCircle, 
  MessageSquare, 
  User, 
  Clock, 
  ThumbsUp, 
  ThumbsDown,
  Send,
  Loader2,
  LogIn,
  Reply,
  Heart,
  Info,
  Bell
} from 'lucide-react';
import { toast } from 'sonner';
import explanationService, { Explanation, Comment } from '../../../../services/explanationService';
import notificationService from '../../../../services/notificationService';

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionId: string;
  questionText: string;
  topicName: string;
}

interface ExplanationComment {
  _id: string;
  explanationId: string;
  userId: string;
  userName: string;
  userProfilePicture?: string;
  comment: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  userLiked?: boolean;
  userDisliked?: boolean;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({
  isOpen,
  onClose,
  questionId,
  questionText,
  topicName
}) => {
  const { user, isAuthenticated } = useAuth();
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [explanationComments, setExplanationComments] = useState<ExplanationComment[]>([]);
  const [newExplanationComment, setNewExplanationComment] = useState('');
  const [newUserExplanation, setNewUserExplanation] = useState('');
  const [replyingToExplanation, setReplyingToExplanation] = useState<string | null>(null);
  const [isExplanationCommentSubmitting, setIsExplanationCommentSubmitting] = useState(false);
  const [isUserExplanationSubmitting, setIsUserExplanationSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'explanations' | 'comments'>('explanations');
  const [highlightedCommentId, setHighlightedCommentId] = useState<string | null>(null);

  // Load data from API when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      
      // Load explanations and comments from API
      const loadData = async () => {
        try {
          const [explanationsData, commentsData] = await Promise.all([
            explanationService.getExplanations(questionId),
            explanationService.getComments(questionId)
          ]);
          
          setExplanations(explanationsData);
          setComments(commentsData);
          
          // Load comments for each explanation
          const explanationCommentsData = await Promise.all(
            explanationsData.map(exp => 
              explanationService.getExplanationComments(exp._id)
            )
          );
          
          const allExplanationComments = explanationCommentsData.flat();
          setExplanationComments(allExplanationComments);
          
          // Check for notification data and handle accordingly
          const notificationData = localStorage.getItem('modalNotificationData');
          if (notificationData) {
            try {
              const data = JSON.parse(notificationData);
              
              // If it's a comment-related notification, switch to comments tab
              if (data.relatedItemType === 'comment' || data.type === 'like' || data.type === 'comment') {
                setActiveTab('comments');
                
                // Highlight the specific comment if it exists
                if (data.relatedItemId) {
                  setHighlightedCommentId(data.relatedItemId);
                  
                  // Remove highlight after 3 seconds
                  setTimeout(() => {
                    setHighlightedCommentId(null);
                  }, 3000);
                }
              }
              
              // Clear the notification data
              localStorage.removeItem('modalNotificationData');
            } catch (error) {
              console.error('Error parsing notification data:', error);
              localStorage.removeItem('modalNotificationData');
            }
          }
        } catch (error) {
          console.error('Error loading data:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      loadData();
    }
  }, [isOpen, questionId]);



  const handleLike = async (explanationId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to like explanations');
      return;
    }

    try {
      const explanation = explanations.find(exp => exp._id === explanationId);
      if (!explanation) return;

      // If already liked, don't allow multiple likes
      if (explanation.userLiked) {
        toast.info('You have already liked this explanation');
        return;
      }

      // If disliked, remove dislike first
      if (explanation.userDisliked) {
        await explanationService.dislikeExplanation(explanationId);
      }
      
             // Then like it
      const success = await explanationService.likeExplanation(explanationId);
      if (success) {
        setExplanations(prev => 
          prev.map(exp => 
            exp._id === explanationId 
               ? { 
                   ...exp, 
                   likes: exp.likes + 1, 
                   dislikes: explanation.userDisliked ? exp.dislikes - 1 : exp.dislikes,
                   userLiked: true, 
                   userDisliked: false 
                 }
              : exp
          )
        );

                   // Create notification for the explanation owner
          if (explanation.userId !== user?._id) {
            const notificationResult = await notificationService.createNotification({
              targetUserId: explanation.userId,
              type: 'like',
              relatedItemId: explanationId,
              relatedItemType: 'explanation',
              message: `${user?.firstName || 'Someone'} liked your explanation`,
              questionId: questionId,
              topicName: topicName,
              questionText: questionText
            });
            
            if (notificationResult) {
              console.log('Notification created successfully for explanation like');
            } else {
              console.error('Failed to create notification for explanation like');
            }
          }
      }
    } catch (error) {
      console.error('Error liking explanation:', error);
      toast.error('Failed to like explanation');
    }
  };

  const handleDislike = async (explanationId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to dislike explanations');
      return;
    }

    try {
      const explanation = explanations.find(exp => exp._id === explanationId);
      if (!explanation) return;

      // If already disliked, don't allow multiple dislikes
      if (explanation.userDisliked) {
        toast.info('You have already disliked this explanation');
        return;
      }

      // If liked, remove like first
      if (explanation.userLiked) {
        await explanationService.likeExplanation(explanationId);
      }
      
      // Then dislike it
      const success = await explanationService.dislikeExplanation(explanationId);
      if (success) {
        setExplanations(prev => 
          prev.map(exp => 
            exp._id === explanationId 
              ? { 
                  ...exp, 
                  dislikes: exp.dislikes + 1, 
                  likes: explanation.userLiked ? exp.likes - 1 : exp.likes,
                  userDisliked: true, 
                  userLiked: false 
                }
              : exp
          )
        );
      }
    } catch (error) {
      console.error('Error disliking explanation:', error);
      toast.error('Failed to dislike explanation');
    }
  };



  const handleSubmitExplanationComment = async (explanationId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to post a comment');
      return;
    }

    if (!newExplanationComment.trim()) {
      toast.error('Please enter a comment');
      return;
    }

    setIsExplanationCommentSubmitting(true);
    
    try {
      const newComm = await explanationService.postExplanationComment(explanationId, newExplanationComment);
      
      if (newComm) {
         setExplanationComments(prev => [newComm, ...prev]);
         setNewExplanationComment('');
         setReplyingToExplanation(null);
        toast.success('Comment posted successfully!');

                   // Create notification for the explanation owner
          const explanation = explanations.find(exp => exp._id === explanationId);
          if (explanation && explanation.userId !== user?._id) {
            await notificationService.createNotification({
              targetUserId: explanation.userId,
              type: 'comment',
              relatedItemId: explanationId,
              relatedItemType: 'explanation',
              message: `${user?.firstName || 'Someone'} commented on your explanation`,
              questionId: questionId,
              topicName: topicName,
              questionText: questionText
            });
          }
      }
    } catch (error) {
      console.error('Error posting explanation comment:', error);
      toast.error('Failed to post comment');
    } finally {
      setIsExplanationCommentSubmitting(false);
    }
  };

  const handleSubmitUserExplanation = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to post your explanation');
      return;
    }

    if (!newUserExplanation.trim()) {
      toast.error('Please enter your explanation');
      return;
    }

    setIsUserExplanationSubmitting(true);
    
    try {
      // Post as explanation (not comment) so it appears in explanations section
      const newExp = await explanationService.postExplanation(questionId, newUserExplanation, topicName);
      
      if (newExp) {
        setExplanations(prev => [newExp, ...prev]);
        setNewUserExplanation('');
        toast.success('Your explanation posted successfully!');
        // Switch to explanations tab to show the new explanation
        setActiveTab('explanations');
      }
    } catch (error) {
      console.error('Error posting user explanation:', error);
      toast.error('Failed to post explanation');
    } finally {
      setIsUserExplanationSubmitting(false);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to like comments');
      return;
    }

    try {
      const comment = comments.find(comm => comm._id === commentId);
      if (!comment) return;

      // If already liked, don't allow multiple likes
      if (comment.userLiked) {
        toast.info('You have already liked this comment');
        return;
      }

      // If disliked, remove dislike first
      if (comment.userDisliked) {
        await explanationService.dislikeComment(commentId);
      }
      
             // Then like it
      const success = await explanationService.likeComment(commentId);
      if (success) {
        setComments(prev => 
          prev.map(comm => 
            comm._id === commentId 
               ? { 
                   ...comm, 
                   likes: comm.likes + 1, 
                   dislikes: comment.userDisliked ? comm.dislikes - 1 : comm.dislikes,
                   userLiked: true, 
                   userDisliked: false 
                 }
              : comm
          )
        );

                   // Create notification for the comment owner
          if (comment.userId !== user?._id) {
            const notificationResult = await notificationService.createNotification({
              targetUserId: comment.userId,
              type: 'like',
              relatedItemId: commentId,
              relatedItemType: 'comment',
              message: `${user?.firstName || 'Someone'} liked your comment`,
              questionId: questionId,
              topicName: topicName,
              questionText: questionText
            });
            
            if (notificationResult) {
              console.log('Notification created successfully for comment like');
            } else {
              console.error('Failed to create notification for comment like');
            }
          }
      }
    } catch (error) {
      console.error('Error liking comment:', error);
      toast.error('Failed to like comment');
    }
  };

  const handleDislikeComment = async (commentId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to dislike comments');
      return;
    }

    try {
      const comment = comments.find(comm => comm._id === commentId);
      if (!comment) return;

      // If already disliked, don't allow multiple dislikes
      if (comment.userDisliked) {
        toast.info('You have already disliked this comment');
        return;
      }

      // If liked, remove like first
      if (comment.userLiked) {
        await explanationService.likeComment(commentId);
      }
      
      // Then dislike it
      const success = await explanationService.dislikeComment(commentId);
      if (success) {
        setComments(prev => 
          prev.map(comm => 
            comm._id === commentId 
              ? { 
                  ...comm, 
                  dislikes: comm.dislikes + 1, 
                  likes: comment.userLiked ? comm.likes - 1 : comm.likes,
                  userDisliked: true, 
                  userLiked: false 
                }
              : comm
          )
        );
      }
    } catch (error) {
      console.error('Error disliking comment:', error);
      toast.error('Failed to dislike comment');
    }
  };

  const handleLikeExplanationComment = async (commentId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to like comments');
      return;
    }

    try {
      const comment = explanationComments.find(comm => comm._id === commentId);
      if (!comment) return;

      // If already liked, don't allow multiple likes
      if (comment.userLiked) {
        toast.info('You have already liked this comment');
        return;
      }

      // If disliked, remove dislike first
      if (comment.userDisliked) {
        await explanationService.dislikeExplanationComment(commentId);
      }
      
      // Then like it
      const success = await explanationService.likeExplanationComment(commentId);
      if (success) {
        setExplanationComments(prev => 
          prev.map(comm => 
            comm._id === commentId 
              ? { 
                  ...comm, 
                  likes: comm.likes + 1, 
                  dislikes: comment.userDisliked ? comm.dislikes - 1 : comm.dislikes,
                  userLiked: true, 
                  userDisliked: false 
                }
              : comm
          )
        );

        // Create notification for the comment owner
        if (comment.userId !== user?._id) {
          await notificationService.createNotification({
            targetUserId: comment.userId,
            type: 'like',
            relatedItemId: commentId,
            relatedItemType: 'comment',
            message: `${user?.firstName || 'Someone'} liked your reply`,
            questionId: questionId,
            topicName: topicName,
            questionText: questionText
          });
        }
      }
    } catch (error) {
      console.error('Error liking explanation comment:', error);
      toast.error('Failed to like comment');
    }
  };

  const handleDislikeExplanationComment = async (commentId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to dislike comments');
      return;
    }

    try {
      const comment = explanationComments.find(comm => comm._id === commentId);
      if (!comment) return;

      // If already disliked, don't allow multiple dislikes
      if (comment.userDisliked) {
        toast.info('You have already disliked this comment');
        return;
      }

      // If liked, remove like first
      if (comment.userLiked) {
        await explanationService.likeExplanationComment(commentId);
      }
      
      // Then dislike it
      const success = await explanationService.dislikeExplanationComment(commentId);
      if (success) {
        setExplanationComments(prev => 
          prev.map(comm => 
            comm._id === commentId 
              ? { 
                  ...comm, 
                  dislikes: comm.dislikes + 1, 
                  likes: comment.userLiked ? comm.likes - 1 : comm.likes,
                  userDisliked: true, 
                  userLiked: false 
                }
              : comm
          )
        );
      }
    } catch (error) {
      console.error('Error disliking explanation comment:', error);
      toast.error('Failed to dislike comment');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-1">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl h-[98vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <HelpCircle className="w-7 h-7" />
              <div>
                <h2 className="text-2xl font-semibold">Question Explanations & Comments</h2>
                <p className="text-blue-100 text-base">{topicName}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col h-[calc(98vh-140px)]">
          {/* Question Display */}
          <div className="p-6 border-b border-gray-200">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Question:</h3>
              <p className="text-gray-700 text-base leading-relaxed">{questionText}</p>
            </div>
            
                         {/* Info for non-authenticated users */}
             {!isAuthenticated && (
               <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                 <div className="flex items-center space-x-2">
                   <Info className="w-5 h-5 text-blue-600" />
                   <p className="text-blue-800 text-sm">
                     <strong>Note:</strong> You can view all explanations and comments without signing in. 
                     To like, dislike, or post explanations, please <a href="/signin" className="underline font-medium">sign in</a>.
                   </p>
                 </div>
               </div>
             )}
             
             {/* Notification indicator */}
             {highlightedCommentId && (
               <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                 <div className="flex items-center space-x-2">
                   <Bell className="w-5 h-5 text-green-600" />
                   <p className="text-green-800 text-sm">
                     <strong>Notification:</strong> Showing the comment you were notified about. It's highlighted below.
                   </p>
                 </div>
               </div>
             )}
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('explanations')}
                className={`flex-1 px-6 py-4 text-base font-medium border-b-2 transition-colors ${
                  activeTab === 'explanations'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Explanations ({explanations.length})</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('comments')}
                className={`flex-1 px-6 py-4 text-base font-medium border-b-2 transition-colors ${
                  activeTab === 'comments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                    <span>Your Explanation</span>
                </div>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isLoading ? (
              <div className="text-center py-12">
                <Loader2 className="w-16 h-16 text-gray-400 mx-auto mb-6 animate-spin" />
                <h3 className="text-xl font-medium text-gray-900 mb-3">Loading...</h3>
                <p className="text-gray-500 text-lg">Please wait while we fetch the data</p>
              </div>
            ) : activeTab === 'explanations' ? (
              // Explanations Tab
              <>
                 {/* Existing Explanations */}
                {explanations.length === 0 ? (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-medium text-gray-900 mb-3">No explanations yet</h3>
                    <p className="text-gray-500 text-lg">Be the first to share your explanation!</p>
                  </div>
                ) : (
                  explanations.map((explanation) => (
                    <Card key={explanation._id} className="border-2 border-gray-100 shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                              {explanation.userProfilePicture ? (
                                <img 
                                  src={explanation.userProfilePicture} 
                                  alt={explanation.userName}
                                  className="w-12 h-12 rounded-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.nextElementSibling!.textContent = getUserInitials(explanation.userName);
                                  }}
                                />
                              ) : (
                                <span>{getUserInitials(explanation.userName)}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">{explanation.userName}</h4>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span>{formatDate(explanation.createdAt)}</span>
                                {explanation.isVerified && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
                            {explanation.explanation}
                          </p>
                        </div>
                        
                        {/* Like/Dislike Buttons */}
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(explanation._id)}
                            disabled={!isAuthenticated || explanation.userLiked}
                            className={`flex items-center space-x-2 ${
                              !isAuthenticated 
                                ? 'text-gray-400 cursor-not-allowed' 
                                : explanation.userLiked 
                                ? 'text-green-600 bg-green-50' 
                                : 'text-gray-600 hover:text-green-600'
                            }`}
                            title={!isAuthenticated ? 'Please login to like explanations' : ''}
                          >
                            <ThumbsUp className="w-5 h-5" />
                            <span className="text-base font-medium">{explanation.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDislike(explanation._id)}
                            disabled={!isAuthenticated || explanation.userDisliked}
                            className={`flex items-center space-x-2 ${
                              !isAuthenticated 
                                ? 'text-gray-400 cursor-not-allowed' 
                                : explanation.userDisliked 
                                ? 'text-red-600 bg-red-50' 
                                : 'text-gray-600 hover:text-red-600'
                            }`}
                            title={!isAuthenticated ? 'Please login to dislike explanations' : ''}
                          >
                            <ThumbsDown className="w-5 h-5" />
                            <span className="text-base font-medium">{explanation.dislikes}</span>
                          </Button>
                          
                          {/* Reply Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setReplyingToExplanation(explanation._id)}
                            disabled={!isAuthenticated}
                            className={`flex items-center space-x-2 border-gray-300 ${
                              !isAuthenticated 
                                ? 'text-gray-400 cursor-not-allowed' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            title={!isAuthenticated ? 'Please login to reply' : ''}
                          >
                            <Reply className="w-4 h-4" />
                            <span>Reply</span>
                          </Button>
                        </div>

                        {/* Comments on this explanation */}
                        <div className="border-t border-gray-200 pt-4">
                          <h5 className="font-medium text-gray-900 mb-3 text-lg">Comments on this explanation:</h5>
                          <div className="space-y-3">
                            {explanationComments
                              .filter(comm => comm.explanationId === explanation._id)
                              .map((comment) => (
                                 <div 
                                   key={comment._id} 
                                   className={`bg-gray-50 rounded-lg p-4 transition-all duration-500 ${
                                     highlightedCommentId === comment._id 
                                       ? 'bg-blue-100 border-2 border-blue-300 shadow-lg transform scale-105' 
                                       : ''
                                   }`}
                                 >
                                  <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                                      {comment.userProfilePicture ? (
                                        <img 
                                          src={comment.userProfilePicture} 
                                          alt={comment.userName}
                                          className="w-8 h-8 rounded-full object-cover"
                                          onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.nextElementSibling!.textContent = getUserInitials(comment.userName);
                                          }}
                                        />
                                      ) : (
                                        <span>{getUserInitials(comment.userName)}</span>
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2 mb-1">
                                        <span className="font-medium text-gray-900">{comment.userName}</span>
                                        <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                                      </div>
                                      <p className="text-gray-700 text-sm">{comment.comment}</p>
                                      <div className="flex items-center space-x-3 mt-2">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                           onClick={() => handleLikeExplanationComment(comment._id)}
                                           disabled={!isAuthenticated || comment.userLiked}
                                          className={`text-xs ${
                                             !isAuthenticated 
                                               ? 'text-gray-400 cursor-not-allowed' 
                                               : comment.userLiked 
                                                 ? 'text-green-600' 
                                                 : 'text-gray-500 hover:text-green-600'
                                           }`}
                                           title={!isAuthenticated ? 'Please login to like replies' : ''}
                                        >
                                          <ThumbsUp className="w-3 h-3 mr-1" />
                                          {comment.likes}
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                           onClick={() => handleDislikeExplanationComment(comment._id)}
                                           disabled={!isAuthenticated || comment.userDisliked}
                                          className={`text-xs ${
                                             !isAuthenticated 
                                               ? 'text-gray-400 cursor-not-allowed' 
                                               : comment.userDisliked 
                                                 ? 'text-red-600' 
                                                 : 'text-gray-500 hover:text-red-600'
                                           }`}
                                           title={!isAuthenticated ? 'Please login to dislike replies' : ''}
                                        >
                                          <ThumbsDown className="w-3 h-3 mr-1" />
                                          {comment.dislikes}
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Reply to explanation form */}
                        {replyingToExplanation === explanation._id && (
                          <div className="border-t border-gray-200 pt-4">
                            <div className="space-y-3">
                              <Textarea
                                placeholder="Write a comment on this explanation..."
                                value={newExplanationComment}
                                onChange={(e) => setNewExplanationComment(e.target.value)}
                                className="min-h-[80px] resize-none"
                                rows={3}
                              />
                              <div className="flex justify-end space-x-3">
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    setReplyingToExplanation(null);
                                    setNewExplanationComment('');
                                  }}
                                  className="border-gray-300"
                                >
                                  Cancel
                                </Button>
                                <Button
                                  onClick={() => handleSubmitExplanationComment(explanation._id)}
                                  disabled={isExplanationCommentSubmitting || !newExplanationComment.trim()}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  {isExplanationCommentSubmitting ? (
                                    <>
                                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                      Posting...
                                    </>
                                  ) : (
                                    <>
                                      <Send className="w-4 h-4 mr-2" />
                                      Post Comment
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                )}
              </>
            ) : (
              // Comments Tab
              <>
                 {/* Add User Explanation Section */}
                 {isAuthenticated && (
                   <Card className="border-2 border-green-200 bg-green-50">
                     <CardHeader>
                       <div className="flex items-center space-x-3">
                         <HelpCircle className="w-6 h-6 text-green-600" />
                         <h3 className="font-semibold text-gray-900 text-lg">Share Your Explanation</h3>
                       </div>
                     </CardHeader>
                     <CardContent className="space-y-4">
                       <Textarea
                         placeholder="Write your step-by-step explanation for this question..."
                         value={newUserExplanation}
                         onChange={(e) => setNewUserExplanation(e.target.value)}
                         className="min-h-[120px] resize-none text-base"
                         rows={5}
                       />
                       <div className="flex justify-end space-x-4">
                         <Button
                           onClick={handleSubmitUserExplanation}
                           disabled={isUserExplanationSubmitting || !newUserExplanation.trim()}
                           className="bg-green-600 hover:bg-green-700 px-6 py-2"
                         >
                           {isUserExplanationSubmitting ? (
                             <>
                               <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                               Posting...
                             </>
                           ) : (
                             <>
                               <Send className="w-5 h-5 mr-2" />
                               Post Explanation
                             </>
                           )}
                         </Button>
                       </div>
                     </CardContent>
                   </Card>
                 )}

                 {/* Existing Comments */}
                {comments.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-medium text-gray-900 mb-3">No comments yet</h3>
                    <p className="text-gray-500 text-lg">Be the first to share your thoughts!</p>
                  </div>
                ) : (
                  comments.map((comment) => (
                     <Card 
                       key={comment._id} 
                       className={`border border-gray-200 shadow-md transition-all duration-500 ${
                         highlightedCommentId === comment._id 
                           ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                           : ''
                       }`}
                     >
                      <CardContent className="p-5">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-semibold">
                            {comment.userProfilePicture ? (
                              <img 
                                src={comment.userProfilePicture} 
                                alt={comment.userName}
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling!.textContent = getUserInitials(comment.userName);
                                }}
                              />
                            ) : (
                              <span>{getUserInitials(comment.userName)}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-gray-900 text-base">{comment.userName}</span>
                              <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                            </div>
                            <p className="text-gray-700 text-base mb-3">{comment.comment}</p>
                            <div className="flex items-center space-x-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLikeComment(comment._id)}
                                 disabled={!isAuthenticated || comment.userLiked}
                                className={`flex items-center space-x-2 ${
                                   !isAuthenticated 
                                     ? 'text-gray-400 cursor-not-allowed' 
                                     : comment.userLiked 
                                    ? 'text-green-600 bg-green-50' 
                                    : 'text-gray-600 hover:text-green-600'
                                }`}
                                 title={!isAuthenticated ? 'Please login to like comments' : ''}
                              >
                                <ThumbsUp className="w-4 h-4" />
                                <span className="text-sm">{comment.likes}</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDislikeComment(comment._id)}
                                 disabled={!isAuthenticated || comment.userDisliked}
                                className={`flex items-center space-x-2 ${
                                   !isAuthenticated 
                                     ? 'text-gray-400 cursor-not-allowed' 
                                     : comment.userDisliked 
                                    ? 'text-red-600 bg-red-50' 
                                    : 'text-gray-600 hover:text-red-600'
                                }`}
                                 title={!isAuthenticated ? 'Please login to dislike comments' : ''}
                              >
                                <ThumbsDown className="w-4 h-4" />
                                <span className="text-sm">{comment.dislikes}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </>
            )}
          </div>

                     {/* Login Alert for Non-Authenticated Users */}
           {!isAuthenticated && (
          <div className="border-t border-gray-200 p-6">
               <Alert>
                <LogIn className="h-5 w-5" />
                <AlertDescription className="text-base">
                   Please <a href="/signin" className="text-blue-600 hover:underline font-medium">login</a> to post your {activeTab === 'explanations' ? 'explanation' : 'explanation'}.
                </AlertDescription>
              </Alert>
                </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
