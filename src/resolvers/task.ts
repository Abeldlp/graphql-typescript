import { Task } from "../entities/Task";
import { Arg, Mutation, Query, Resolver, Int } from "type-graphql";

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    return await Task.find({});
  }

  @Query(() => Task, { nullable: true })
  async task(@Arg("id", () => Int) id: number): Promise<Task | null> {
    return await Task.findOne({ where: { id } });
  }

  @Mutation(() => Task)
  async createTask(@Arg("title", () => String) title: string) {
    return await Task.create({ title, isCompleted: false }).save();
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg("id", () => Int) id: number): Promise<boolean> {
    const task = await Task.findOne({ where: { id } });
    if (!task) return false;

    await Task.delete({ id });
    return true;
  }

  @Mutation(() => Task)
  async updateTask(
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String) title: string,
    @Arg("isCompleted", () => Boolean) isCompleted: boolean
  ): Promise<Task | null> {
    const task = await Task.findOne({ where: { id } });
    if (!task) return null;

    task.title = title;
    task.isCompleted = isCompleted;
    await Task.update({ id }, task);
    return task;
  }
}
