export class CreateBlogDto {
  readonly title: string;

  readonly author: string;

  readonly tags: any;

  readonly summary: string;

  readonly content: string;

  readonly coverImg: string;

  readonly star: number;
  
  readonly count: number;

  time: string;

  pv: number;
  
}
export class DelBlogDto {
  readonly title: string;
}
export class BlogDetail {
  readonly id: string;
}
export class postStar {
  readonly title: string;
}
