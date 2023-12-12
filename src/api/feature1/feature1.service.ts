import axios, { AxiosResponse } from "axios";
import { Post } from "../../types/feature1.model";

const userPost = async () => {

    try {
        let result: AxiosResponse = await axios.get(`${process.env.TEST_URL}`);
        const post: Post = result.data;

        console.log(post);
        return post;

    } catch(err) {
        console.error(err)
    }
}

export default userPost;