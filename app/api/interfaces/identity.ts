export interface IIdentity {
  handlerName: string;
  content: string;
  displayName: string;
  visibility: boolean;
  bio: string;
  active: boolean;
  privacy: boolean;
  userSub: string;
  value: string;
  createdAt: string;
  displayValue: string;
  provider?: string;
  credentials?: any[];
  avatar?: string;
}
