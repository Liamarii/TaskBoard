export class Task {
  public Id: string = '';
  public Content: string = '';

  constructor(id: string = '', content: string = '') {
    this.Id = id;
    this.Content = content;
  }
}
