export class CreateBlogDto {
  readonly title: string;

  readonly author: string;

  readonly tags: string;

  readonly summary: string;
}
export class DelBlogDto {
  readonly title: string
}
