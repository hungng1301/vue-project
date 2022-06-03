import router from "@/router";

export default class LoginViewModel {
    check!: boolean
    login(username: string, password: string) {
        if (username != "" && password != "") {
            if (username == "admin" && password == "admin") {
                sessionStorage.setItem("CurAcc", username);
                router.replace({ name: "main" });
            } else {
                this.check = true
            }
        } else {
            this.check = false
        }
    }

    logout() {
        sessionStorage.removeItem("CurAcc")
    }
}

export const lvm = new LoginViewModel