export class BaseURL {
  /**
   * Configure port number and
   * server by editing the
   * following variables below
   */
  private static port = '8080';
  private static server = 'localhost';

  private static scheme = 'http';

  public static baseURL = `${this.scheme}://${this.server}:${this.port}`;
}
