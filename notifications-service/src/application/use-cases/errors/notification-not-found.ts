export class NotificationNotFound extends Error {
  constructor() {
    super('Notification not found.'); //super => chama o constructor da classe Error
  }
}
