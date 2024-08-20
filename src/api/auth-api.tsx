export default class AuthApi {

    // Метод для получения данных
    static async fetchData(): Promise<any> {
        const response = await fetch("https://localhost:7082/data"); // ваш IP
        const data = await response.json();
        return data;
    }

    // Метод для регистрации пользователя
    static async registerUser(username: string, password: string, email: string): Promise<void> {
        const response = await fetch("https://localhost:7082/Users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                email,
            }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }
    }

    // Метод для входа пользователя
    static async loginUser(username: string, password: string): Promise<any> {
        console.log(username, password);
        const response = await fetch("https://localhost:7082/Users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return response.json();
    }
}
