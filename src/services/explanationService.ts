import { toast } from 'sonner';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Explanation {
  _id: string;
  questionId: string;
  userId: string;
  userName: string;
  userProfilePicture?: string;
  explanation: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  isVerified: boolean;
  topicName: string;
  userLiked?: boolean;
  userDisliked?: boolean;
}

export interface Comment {
  _id: string;
  questionId: string;
  userId: string;
  userName: string;
  userProfilePicture?: string;
  comment: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  topicName: string;
  userLiked?: boolean;
  userDisliked?: boolean;
}

export interface ExplanationComment {
  _id: string;
  explanationId: string;
  userId: string;
  userName: string;
  userProfilePicture?: string;
  comment: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  userLiked?: boolean;
  userDisliked?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class ExplanationService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Fetch explanations for a question
  async getExplanations(questionId: string): Promise<Explanation[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanations/question/${questionId}`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to fetch explanations');
      }

      const result: ApiResponse<Explanation[]> = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error fetching explanations:', error);
      toast.error('Failed to load explanations');
      return [];
    }
  }

  // Post a new explanation
  async postExplanation(questionId: string, explanation: string, topicName: string): Promise<Explanation | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanations`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          questionId,
          explanation,
          topicName
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to post explanation');
      }

      const result: ApiResponse<Explanation> = await response.json();
      toast.success('Explanation posted successfully!');
      return result.data;
    } catch (error) {
      console.error('Error posting explanation:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to post explanation');
      return null;
    }
  }

  // Like an explanation
  async likeExplanation(explanationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanations/${explanationId}/like`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to like explanation');
      }

      return true;
    } catch (error) {
      console.error('Error liking explanation:', error);
      toast.error('Failed to like explanation');
      return false;
    }
  }

  // Dislike an explanation
  async dislikeExplanation(explanationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanations/${explanationId}/dislike`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to dislike explanation');
      }

      return true;
    } catch (error) {
      console.error('Error disliking explanation:', error);
      toast.error('Failed to dislike explanation');
      return false;
    }
  }

  // Fetch comments for a question
  async getComments(questionId: string): Promise<Comment[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/question/${questionId}`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }

      const result: ApiResponse<Comment[]> = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast.error('Failed to load comments');
      return [];
    }
  }

  // Post a new comment
  async postComment(questionId: string, comment: string, topicName: string): Promise<Comment | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          questionId,
          comment,
          topicName
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to post comment');
      }

      const result: ApiResponse<Comment> = await response.json();
      toast.success('Comment posted successfully!');
      return result.data;
    } catch (error) {
      console.error('Error posting comment:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to post comment');
      return null;
    }
  }

  // Like a comment
  async likeComment(commentId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/${commentId}/like`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to like comment');
      }

      return true;
    } catch (error) {
      console.error('Error liking comment:', error);
      toast.error('Failed to like comment');
      return false;
    }
  }

  // Dislike a comment
  async dislikeComment(commentId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/comments/${commentId}/dislike`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to dislike comment');
      }

      return true;
    } catch (error) {
      console.error('Error disliking comment:', error);
      toast.error('Failed to dislike comment');
      return false;
    }
  }

  // Fetch comments for an explanation
  async getExplanationComments(explanationId: string): Promise<ExplanationComment[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanation-comments/explanation/${explanationId}`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to fetch explanation comments');
      }

      const result: ApiResponse<ExplanationComment[]> = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error fetching explanation comments:', error);
      toast.error('Failed to load explanation comments');
      return [];
    }
  }

  // Post a comment on an explanation
  async postExplanationComment(explanationId: string, comment: string): Promise<ExplanationComment | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanation-comments/explanation/${explanationId}`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          comment
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to post explanation comment');
      }

      const result: ApiResponse<ExplanationComment> = await response.json();
      toast.success('Comment posted successfully!');
      return result.data;
    } catch (error) {
      console.error('Error posting explanation comment:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to post comment');
      return null;
    }
  }

  // Like an explanation comment
  async likeExplanationComment(commentId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanation-comments/${commentId}/like`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to like explanation comment');
      }

      return true;
    } catch (error) {
      console.error('Error liking explanation comment:', error);
      toast.error('Failed to like comment');
      return false;
    }
  }

  // Dislike an explanation comment
  async dislikeExplanationComment(commentId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/explanation-comments/${commentId}/dislike`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to dislike explanation comment');
      }

      return true;
    } catch (error) {
      console.error('Error disliking explanation comment:', error);
      toast.error('Failed to dislike comment');
      return false;
    }
  }
}

export default new ExplanationService();
