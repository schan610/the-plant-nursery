import { useRouter } from "next/router";
import Link from "next/link";
const RouteNavigation = () => {
  const router = useRouter();
  let prev;
  const pathsArray = router.pathname
    .slice(1)
    .split("/")
    .map((pathname, index, array) => {
      let name = pathname === "shop" ? `Shop All` : pathname;
      if (index === 0) {
        return { name, path: `/${pathname}` };
      }
      prev = `${prev ? prev : ``}/${array[index - 1]}`;
      return { name, path: `${prev}/${pathname}` };
    });

  return (
    <nav className="route-navigation">
      {pathsArray.map((path, index) => {
        if (index === 0) {
          return (
            <Link href={path.path} key={path.path}>
              {`/ ${path.name} `}
            </Link>
          );
        }
        return (
          <Link href={path.path} key={path.path}>{`/ ${path.name} `}</Link>
        );
      })}
    </nav>
  );
};

export default RouteNavigation;
