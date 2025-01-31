import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumb = ({ breadcrumblist, active }) => {
  const router = useRouter();
  return (
    <div className="row ">
      <div className="col-12">
        <div className="py-1 d-flex align-items-center justify-content-between">
          <div className="page-title-right">
            <ol className="breadcrumb">
              {breadcrumblist?.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="breadcrumb-item !text-black font-source-pro"
                  >
                    <Link href={item?.path}>
                      <span className="font-source-pro">{item?.name}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="breadcrumb-item !text-[#D41958] font-source-pro">
                <Link href={router?.asPath} className="font-source-pro">
                  <span className="font-source-pro">{active}</span>{" "}
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
