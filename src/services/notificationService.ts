import { toast } from 'sonner';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Notification {
  _id: string;
  userId: string;
  type: 'like' | 'comment' | 'reply';
  title: string;
  message: string;
  relatedItemId: string; // ID of the explanation/comment that was liked/commented on
  relatedItemType: 'explanation' | 'comment';
  isRead: boolean;
  createdAt: string;
  fromUser?: {
    _id: string;
    name: string;
    profilePicture?: string;
  };
  // Additional navigation info
  questionId?: string; // ID of the question this notification relates to
  topicName?: string; // Topic name for navigation
  questionText?: string; // Question text for context
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class NotificationService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Get all notifications for the current user
  async getNotifications(): Promise<Notification[]> {
    try {
      const notifications = this.getLocalNotifications();
      return notifications;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      return [];
    }
  }

  // Mark a notification as read
  async markAsRead(notificationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to mark notification as read');
      }

      return true;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }
  }

  // Mark all notifications as read
  async markAllAsRead(): Promise<boolean> {
    try {
      const notifications = this.getLocalNotifications();
      const updatedNotifications = notifications.map(n => ({ ...n, isRead: true }));
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      return true;
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      return false;
    }
  }

  // Get unread notification count
  async getUnreadCount(): Promise<number> {
    try {
      const notifications = this.getLocalNotifications();
      const unreadCount = notifications.filter(n => !n.isRead).length;
      return unreadCount;
    } catch (error) {
      console.error('Error fetching unread count:', error);
      return 0;
    }
  }

  // Create a notification (called when someone likes/comments on user's post)
  async createNotification(data: {
    targetUserId: string;
    type: 'like' | 'comment' | 'reply';
    relatedItemId: string;
    relatedItemType: 'explanation' | 'comment';
    message: string;
    questionId?: string;
    topicName?: string;
    questionText?: string;
  }): Promise<boolean> {
    try {
      
      // For now, always use localStorage since backend endpoints don't exist
      const notification: Notification = {
        _id: Date.now().toString(),
        userId: data.targetUserId,
        type: data.type,
        title: data.type === 'like' ? 'New Like' : data.type === 'comment' ? 'New Comment' : 'New Reply',
        message: data.message,
        relatedItemId: data.relatedItemId,
        relatedItemType: data.relatedItemType,
        isRead: false,
        createdAt: new Date().toISOString(),
        fromUser: {
          _id: 'current-user',
          name: 'Someone',
          profilePicture: ''
        },
        questionId: data.questionId,
        topicName: data.topicName,
        questionText: data.questionText
      };

      // Store in localStorage
      const existingNotifications = this.getLocalNotifications();
      
      existingNotifications.unshift(notification);
      localStorage.setItem('notifications', JSON.stringify(existingNotifications));
      
      return true;
    } catch (error) {
      console.error('Error creating notification:', error);
      return false;
    }
  }

  // Helper method to get notifications from localStorage
  private getLocalNotifications(): Notification[] {
    try {
      const stored = localStorage.getItem('notifications');
      const notifications = stored ? JSON.parse(stored) : [];
      return notifications;
    } catch (error) {
      console.error('Error reading notifications from localStorage:', error);
      return [];
    }
  }

  // Delete a notification
  async deleteNotification(notificationId: string): Promise<boolean> {
    try {
      const notifications = this.getLocalNotifications();
      const updatedNotifications = notifications.filter(n => n._id !== notificationId);
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      return true;
    } catch (error) {
      console.error('Error deleting notification:', error);
      return false;
    }
  }

  // Clear all notifications (for testing)
  async clearAllNotifications(): Promise<boolean> {
    try {
      localStorage.removeItem('notifications');
      return true;
    } catch (error) {
      console.error('Error clearing notifications:', error);
      return false;
    }
  }
}

export default new NotificationService();
