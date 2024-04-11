type HeaderLinkType = {
    id: number,
    path: string,
    name: string
}

type registerFormType = {
    type: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

type registerSubmitType = {
    address: string;
    city: string;
    image: FileList;
}

export type { HeaderLinkType, registerFormType,registerSubmitType }