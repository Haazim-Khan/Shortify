import {url} from "../../model/schema";
import { redirect } from "next/navigation"

const page = async ({ params }) => {
    const { slug } = await params
    const data = await url.findOne({ shortURL: slug });
    return redirect(data.longURL);
}

export default page;
