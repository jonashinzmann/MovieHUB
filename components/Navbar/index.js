import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Footer } from "./style";

function Navigation() {
  const router = useRouter();

  return (
    <Footer>
      <ul>
        <li>
          <Link href="/">
            {router.pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            {router.pathname === "/favorites" ? <AiFillHeart /> : <AiOutlineHeart />}
          </Link>
        </li>
      </ul>
    </Footer>
  );
}

export default Navigation;
