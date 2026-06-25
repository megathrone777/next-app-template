declare global {
  interface TActionResult {
    message: string;
    type: "error" | "success";
  }

  type TUserRole = "admin";

  interface TUser {
    id: string;
    login: string;
    passwordHash: string;
    role: TUserRole;
    salt: string;
  }

  interface TSessionData {
    role: TUserRole;
    userId: TUser["id"];
  }

  interface TReview {
    count: string;
    id: number;
    imageUrl: string;
    link: string;
    linkTitle: string;
    text: string;
  }

  interface TSelectOption {
    label: string;
    value: string;
  }

  interface TLatLon {
    lat: number;
    lon: number;
  }
}

export {};
