import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GraphicDesign = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1Q-WVur0OM9SZYdY6_CU6tm8AEvRLQJsq",
    "1PCkDm0jN5BF1L97OC3j9ZQUgFMr5EtIo",
    "1L3mSo78Bl3x2XpuoiecBvv8XY5t51GWR",
    "1elkZps9c09qwnOMs1bIBysYD3yUxp-_m",
    "15yHzdHDMzj_OV41i4-Kz_TaFXr27UZ0M",
    "1hMo15VHn_JOULOdPFm2Xlth6PnTk_ljP",
    "1WmViBg5ju2v1hULb71ou3jicZiP36Fh7",
    "1bFXk6tUTC8JdBcQiF_I6dU3cQRfOlRvr",
    "1fpTUlA842gcqdw8rvwsD0pwGhXeJ3g45",
    "1MfIitkhwGYSolpmlpXujCMQRqCcDKbxp",
    "1dlxSsB0n2kzQkp0KCnihbVPzfFX4Z9MM",
    "1ghao8n1WBxNBDkpMNWaKTV8fRgDY_7pl",
    "1Ay4SDrANOzoFhzGQVcPMe3P9PJkc9Lob",
    "1Yz9l8KJa0vesco4a2W4mdTJhWXFAOMLS",
    "1q991UDeX-dsYUacXdOrGxMe_2LvVLeES",
    "1OrMTLPEIlQPxyFHZZWy4ZHtaytlwzFSE",
    "1vF6aF-8PLb2iTwDZW637iEgpaABXgeys",
    "1TuJMyRvfGLBMSGqBcGoeJGIZYBhp0_3-",
    "1OTJifL7qLbsRjhPUh5VXR3h2EJpmaEKV",
    "1A74fQlNxUafUUFwcHRnWVnfbPAONND3V",
    "1raRw4nSJEPaBh4NipvPW5TobtK3Oc-6_",
    "1ojujNbK7JS0L273aGNJ8gT4XFCcyW_MZ",
    "16bvW5xzflrbdj8LEPJsNVqvrRGFDLnAZ",
    "13DkQ1nDBwXcn0-VHWCNfTKGAgyDYRQ3B",
    "1_YVUXL9-5UYEIXg0XFwsAI89fqyk7QVR",
    "1SHA_Bl3DuRuhleB7HQ4rnhagUYewQOAe",
    "1_5TriO6Y_axHDg0i45BoFmsGVj_fGOyZ",
    "1I7Cf0Ly9ZNs-Vldrrcnq1NB5kKEd-GxA",
    "1q4cKEYvVWrvYP5MB2oukas1gZbWH4Oz8",
    "17VbZfs1RGUTmpvbnwDUEBV4Ps0a2E-9L",
    "1jSOS56JSS5OQ_PvgsT9AVQO0eGaMhVRd",
    "1zfui662KL0An7JPbIKF5uiHKkhX1XOMf",
    "1QWfHl2TDASd21Di9dM5p2_Jjfr7k93rw",
    "1tx9tWVpdzqGoIjqGcii4WBnU-Ao8xGc_",
    "1fHY2xNGL2yC_PBAm99-ey_9DLuE0WSKq",
    "10HUk7ql3gP7b0lRHz8EDWv4wsYuNEYE0",
    "1Bw598SqWwnGIt0NFoXyWmva6WfILciwr",
    "1_SZuuUSpJLSiXMc-_Z30VwdnEehBr_9U",
    "1r3utHL-4D2Hxe-qvXMWgeZwvv-yB7k-d",
    "1Ml0xDy0iXN5yZZ7TyEdmSaWZRdtT5N8P",
    "1ReFG4ZkdrAl4HQd5ZDBG4pJz03WtdyWU",
    "1FIqHWSL0U8OS4Xkd-Ld8h3LrfISsKec1",
    "1W5KNwxUE_2IydN-Diwp6XPp8GSxva92Y",
    "17scA4Kj_8vqrJMMBKGybEbWbiz2k5C3k",
    "1GGuyY_obOmfEh4EEZN5GR7ExoZgRiZOM",
    "1u1P_MclXnRAH2zP1VTB2DCV1Mclxk6Tu",
    "1NMG7sB9p4veR0yeg-niBY4s7-Oywv3So",
    "1pYseAj5halgHXlLTjXDNT0BwBv3tJ0Jk",
    "16TXKZZMxbYQ_wIJbooOe5wY6IFhyMwZL",
    "1pmnCMSH90nS94rL3EPlxv8bvSh9XXv3P",
    "1Hwo4rKIOnZa2QyS_0SM5BaMPhQWHDckd",
    "1b1s-JLiqtFUFe-bwMKUXxe-3MYmiGyTv",
    "1p7E2Scxq-82oqt4BmdWzZ4Rmh4K9RiBq",
    "1Mp0EwmIxUd4saGExDtk96tm4qjf3e8Ot",
    "1IGoxr5jHz3odUXlYIG9CTRmA7llFgQvy",
    "13dTsJIj7EPhSIhOUeosR03iiDVUdlWbh",
    "1eFk4pyDBC8xrATcMIG7VZCPrMTKouBOj",
    "1pwBrtNPy6arstx88LXufxy9oUv6Jngpb",
    "1hCaV6b0BBoW8ssGABLfNbebZnVZrE96i",
    "1Ux3muERdJRh9XvF1CnyntcztSj3T47bg",
    "1c6Nhkby6Jghnm-9TaVteeFMXQ4dV11pE",
    "1zXAdwINXJaBO_3kh-3gksx3xN3uMyl9z",
    "1wD_oz4I9bF4vzepeZx4ziDhvZLJ9pDbF",
    "1WEOpmzl0kYWMJfrX9xtl_6_VNAmoKsUl",
    "1PPYmEXEHkDMsNjGJaLUr6xRu18nUG6tV",
    "1iq_FQo9fZCG6tv91sAKjC232A-yIv6ZX",
    "12tipHGsMVpsIjsDfB0tXsohzvR7MHTk9",
    "1GoK9ZyxMxiAkOZUvoOoed1IPsa5feFYj",
    "1iF1WiYINMIKdz0SyLKZPwzs1oalss9Ce",
    "1nxLnave0TMgXCc-77E1_r4X1gZBQ9GUK",
    "1yDZm0Pga9dJVJliFhkpBujKENlubyCyN",
    "1pxOdjqGibOA7tMfoR8trrA0cLH6yyNM9",
    "1WX7Sj2xY0RiNeHsv0xOJuCBZPKtofUAH",
    "1HrfGFrCIkAhmYAhsZZCiZIEWRX4wkm4U",
    "1qA5EyVx8IdkHLC18AFcptgHkHkB6qjVB",
    "1P7pdgQc7cGPvGabY94Q5DaKqgxlaD6dd",
    "116eDa0GUankh7JgGlvmQ7i8RDGmxAu3i",
    "1NtihmVDxr_kWAe1xGrKejYUwoibdKGQo",
    "1z2sCtCjmR-8TssfPkk6hxedkB9BBiLwJ",
    "1cwv3IS-Xt5suiJyn5hDY-lbGlmHMs-hI",
    "17toNwACvKcvSCl-LMCST8-dLgFOlco4X",
    "1783c_-75jnmrSmgQOsM3oeNHa0gdq0VZ",
    "1oUA8N7rgFB10kJSUiZDaooWcDzqyBWBy",
    "1wYtJs6_QPzFUlEb5l3LPk44djTG9pbK5",
    "1zd_Rh-fH8WOcD6lmOeKFxFuiUhC961Z4",
    "1_kJqP6x5k_fCHxnOgTLYkZEEvpdxo9E9",
    "1Kgr7a3PG3aV-y-R9YM3opGM9IrjgOyXf",
    "1Z8ZD1hTXaDP9G2jX6KmpJ75LWVXe7I4W",
    "1ibaf_Mql6iss1ZhvADLftAP1k3MFU_gf",
    "1f4qrTtQ8OXwSz1GX5WH-RdQvA62G8vyD",
    "1dySKAkjNuHUHbFg8zdvPjTLTVfBGAT1_",
    "1KqBQT_Xl7bHGZYeQQlqxwkChJv5puWqg",
    "1l_dwX0Gz_EDKDULYRTKNNNUIWZP1E7uA",
    "1l3xalQsw18VpjcA-7Prqg-73B3AMpDtr",
    "116iMZoaLFHOpcaJcKyXfSQkga7Y2NAVO",
    "1yGQnDgwtD0eC-8sX3WhDLU83GoTaF95u",
    "1mvW-R542DxrW5FC35GpjEL_QixacWTMy",
    "1ZzoCoOawCfSaMjJTShapR0gaf5gUBqpd",
    "1u9MZLRIKG4MLI4J7-ryfMCgts-vMjBXK",
    "1CYettXOTaeNN30ApsXthTc02C944d2JB",
    "1njRfF5p1AHbAqu4dzXjFABRjTICaWZVl",
    "1Z_UN1p6UW1PV_vbr5Xw-78bKTDyJrGkD",
    "1xlZdLYqqOLfQqXgW-AUmDX7bZVGRIW4Y",
    "1wmo4HFjK9z33nASb2w99L7jILMc-u9At",
    "1VjQqs4CqDj5yriRlgd07YMjLFwUvLYm2",
    "17c0Il47poInEJnZTjkQ0IoDbLsssMKuD",
    "1u7vMyb9calKTgjCHuAbfIIXU_YNV6AwL",
    "1Der7AX2aMJcwj0n8Cc83YNEAXsQ0YXj8",
    "1HvM5c8dhFw6Tq1VHDIRPflUVbPm3NuMs",
    "1lR9peoxDzjxZp7vYP6bjIs87Q4hu_GNL",
    "1_VO9Ik2h8t44w1eqpJbRKAEpBlC1QYbu",
    "1d1yPjorUsdSSTVOL2V-k-1af2d3EpZGk",
    "1Cwsbk5k2tMxFkQdisxn0WAQmsbcyBxcq",
    "1RATLXYHRLs6Kn8df2km2dnoxxRb6eNbN",
  ];

  useEffect(() => {
    setImages(data.slice(0, page * imagesperpage));
  }, [page]);

  function redirectHandler(url) {
    const link = `https://drive.google.com/open?id=${url}&usp=drive_copy`;
    window.open(link, "_blank", "noreferrer");
  }

  return (
    <>
      <div className="*:w-full grid mx-auto md:grid-rows-2 md:grid-cols-3 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000">
        {images.map((image, index) => {
          return (
            <LazyLoadImage
              key={index}
              src={`https://drive.google.com/thumbnail?id=${image}`}
              alt={image}
              onClick={() => redirectHandler(image)}
            />
          );
        })}
      </div>
      {images.length !== data.length && (
        <div className="gap-4 mt-6 flex-center">
          <button onClick={() => setPage(page + 1)} className="btn btn-filled">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default GraphicDesign;
