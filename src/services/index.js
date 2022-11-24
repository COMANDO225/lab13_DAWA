import api from "../api"

export const searchBooks = async (search) => {
    try {
        const response = await api.get(
            `/volumes?q=${search}
            &maxResults=30
            `
        );
        return await response.data;
    } catch (error) {
        console.log("Error", error);
    }
}