import { useRouter } from "next/router";
import Link from "next/link";
const RouteNavigation = () => {
  const router = useRouter();
  let prev;
  const pathsArray = router.pathname
    .slice(1)
    .split("/")
    .map((pathname, index, array) => {
      if (index === 0) {
        return { name: pathname, path: `/${pathname}` };
      }
      prev = `${prev ? prev : ``}/${array[index - 1]}`;
      return { name: pathname, path: `${prev}/${pathname}` };
    });

  return (
    <div className="route-navigation">
      {pathsArray.map((path, index) => {
        if (index === 0) {
          return <Link href={path.path}>{path.name} </Link>;
        }
        return <Link href={path.path}>{`/ ${path.name} `}</Link>;
      })}
    </div>
  );
};

export default RouteNavigation;
