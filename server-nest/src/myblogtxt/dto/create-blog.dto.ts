export class CreateBlogDto {
  readonly title: string;

  readonly author: string;

  readonly tags: string;

  readonly summary: string;

  readonly content: string;

  readonly coverImg: string;

  readonly star: number;
  
  readonly count: number;
}
export class DelBlogDto {
  readonly title: string;
}
export class BlogDetail {
  readonly id: string;
}
