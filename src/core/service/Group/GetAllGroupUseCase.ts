import { GroupService } from "src/domain/services/GroupService/GroupService"

export class GetAllGroupUseCase {

  constructor(
    private groupService?: GroupService
  ) {
    this.groupService = new GroupService()
  }

  async getAllGroup() {
    try {
      var response = await this.groupService.getAllGroup()

      return response.map(group => ({
        id: group.id,
        code: group.code,
        name: group.name,
        description: group.description,
        status: group.status
      }))
    } catch (error) {
      return error
    }
  }
}