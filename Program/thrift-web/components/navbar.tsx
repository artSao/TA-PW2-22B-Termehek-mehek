import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/action/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="ml-4 flex lg:ml-8">
            <p className="font-bold text-xl">TOKO</p>
          </Link>

          {/* Main Navigation */}
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
