import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  //método estático pois dessa forma não será presciso instanciar a classe PrismaNotificationMapper
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}

/**
 * toPrisma:
 * recebe a entidade de notificação original da camada de aplicação => (notification: Notification)
 * e vai converter para o formato que o prisma precisa
 */
