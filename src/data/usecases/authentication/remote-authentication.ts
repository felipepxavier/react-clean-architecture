import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httPostClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httPostClient.post(this.url)
  }
}
