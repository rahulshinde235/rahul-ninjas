import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oopsss...</h1>
      <h2>That page cannnot be found</h2>
      <Link href="/">
        <a>Go back to the Homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
