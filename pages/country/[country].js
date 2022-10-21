import React from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Country.module.css";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline/";

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  const paths = data.map((item) => {
    return {
      params: {
        country: item.name.common.toLowerCase(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.country;
  const { data } = await axios.get(
    "https://restcountries.com/v3.1/name/" + name
  );

  let res = await axios.get("https://restcountries.com/v3.1/all");
  let allData = res.data;

  return {
    props: { country: data[0], allCountries: allData },
  };
};

export default function Country({ country, allCountries }) {
  const router = useRouter();
  const singleBorder = country.borders
    ? country.borders.map((border) => {
        return border;
      })
    : "";

  const singleCountry = allCountries.map((item) => {
    return { cca3: item.cca3, name: item.name.common };
  });

  const countryMatch = singleBorder
    ? singleCountry.filter((item) =>
        singleBorder.some((bord) => bord == item.cca3)
      )
    : [];

  const currencies = country.currencies
    ? Object.values(country.currencies)
    : [];
  const languages = country.languages ? Object.values(country.languages) : [];

  return (
    <>
      <Head>
        <title>{country.name.common} - REST Countries API</title>
        <meta
          name="description"
          content={`Details page of ${country.name.common} - Rest Countries API`}
        />
        <link
          rel="icon"
          type="image/png"
          href="/rest-countries-api/favicon.png"
        />
      </Head>
      <main className={styles.container}>
        <div className={styles.top}>
          <button
            className={styles.backButton}
            onClick={() => router.push("/")}
          >
            Back
          </button>
          <ArrowLeftIcon className={styles.backIcon} />
        </div>
        <div className={styles.countryWrap}>
          <div className={styles.flag}>
            <Image
              src={country.flags.png}
              alt={"Flag of " + country.name.common}
              className={styles.countryFlag}
              width={500}
              height={300}
            />
          </div>
          <div className={styles.info}>
            <h1>{country.name.common}</h1>
            <div className={styles.countryInfo}>
              <div className={styles.mainInfo}>
                <p>
                  <span>Official name:</span> {country.name.official}
                </p>
                <p>
                  <span>Population:</span>{" "}
                  {country.population.toLocaleString("en")}
                </p>
                <p>
                  <span>Region:</span>{" "}
                  {country.region ? country.region : "No region"}
                </p>
                <p>
                  <span>Sub Region:</span>{" "}
                  {country.subregion ? country.subregion : "No sub region"}
                </p>
                <p className={styles.capital}>
                  <span>Capital:</span>{" "}
                  {country.capital
                    ? country.capital.map((cap) => {
                        return (
                          <span className={styles.multInfoValue} key={cap}>
                            {cap}
                          </span>
                        );
                      })
                    : "No capital"}
                </p>
              </div>
              <div className={styles.miscInfo}>
                <p>
                  <span>Top level domain:</span>{" "}
                  {country.tld
                    ? country.tld.map((item) => {
                        return (
                          <span className={styles.multInfoValue} key={item}>
                            {item}
                          </span>
                        );
                      })
                    : "No TLD"}
                </p>
                <p className={styles.currencies}>
                  <span>Currencies:</span>{" "}
                  {currencies.length > 0
                    ? currencies.map((curr) => {
                        return (
                          <span
                            className={styles.multInfoValue}
                            key={curr.name}
                          >
                            {curr.name}
                          </span>
                        );
                      })
                    : "No currencies"}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {languages.length > 0
                    ? languages.map((lang) => {
                        return (
                          <span className={styles.multInfoValue} key={lang}>
                            {lang}
                          </span>
                        );
                      })
                    : "No languages"}
                </p>
              </div>
            </div>
            <div className={styles.borders}>
              <span>Border countries:</span>{" "}
              {countryMatch.length > 0
                ? countryMatch.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={"/country/" + item.name.toLowerCase()}
                      >
                        <button className={styles.button}>{item.name}</button>
                      </Link>
                    );
                  })
                : "No borders"}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
