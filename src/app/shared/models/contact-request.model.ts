export interface ContactRequest {
  fullName: string;
  phoneNumber: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
  message: string;
}
