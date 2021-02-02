import { projectType } from '../enums/projectType.enum';

export type project = {
  name: string;
  type: projectType;
  typeWritten: string;
  headline: string;
  description: string;
  imgSrc: string;
  url: string;
};
