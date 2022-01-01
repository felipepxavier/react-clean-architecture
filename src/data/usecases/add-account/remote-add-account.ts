import { AccountModel } from '@/domain/models'
import { HttpPostClient } from '@/data/protocols/http'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    await this.httPostClient.post({
      url: this.url,
      body: params
    })

    return null
  }
}
