import { NextComponentType } from "next";

const Header: NextComponentType = () => {
    return (
        <h1 className="text-center text-4xl my-5 md:my-10 md:text-8xl">News 
        <span className="text-blue-400">&nbsp;App</span></h1>
    )
}

export default Header