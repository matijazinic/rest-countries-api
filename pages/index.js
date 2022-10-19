import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid/";

export const getStaticProps = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  const sortedData = data.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });
  return {
    props: { countries: sortedData },
  };
};

export default function Home({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const filters = [
    { value: "", name: "Filter by Region:" },
    { value: "Africa", name: "Africa" },
    { value: "Americas", name: "America" },
    { value: "Asia", name: "Asia" },
    { value: "Europe", name: "Europe" },
    { value: "Oceania", name: "Oceania" },
  ];

  return (
    <>
      <Head>
        <title>REST Countries API</title>
        <meta
          name="description"
          content="REST Countries API challenge provided by FrontEnd Mentor."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <div className={styles.mainTop}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
          <MagnifyingGlassIcon className={styles.searchIcon} />
          <select name="filter" id="filter">
            {filters.map((filt) => {
              return (
                <option
                  key={filt.name}
                  value={filt.value}
                  onClick={handleRegion}
                >
                  {filt.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.countries}>
          {countries
            .filter((country) => {
              if (
                search &&
                country.name.common.toLowerCase().includes(search.toLowerCase())
              ) {
                if (region && region == country.region) {
                  return country;
                } else if (region && region != country.region) {
                  return;
                }
                return country;
              } else if (!search && region && region == country.region) {
                return country;
              } else if (!search && !region) {
                return country;
              }
            })
            .map((country) => {
              const capital = country.capital
                ? country.capital.map((cap) => {
                    return <span key={cap}>{cap}</span>;
                  })
                : "No capital";

              return (
                <Link
                  key={country.name.common}
                  href={"/country/" + country.name.common.toLowerCase()}
                >
                  <div className={styles.country}>
                    <Image
                      src={country.flags.png}
                      alt={"Flag of " + country.name.common}
                      className={styles.countryFlag}
                      width={300}
                      height={180}
                    />
                    <div className={styles.countryInfo}>
                      <p className={styles.name}>{country.name.common}</p>
                      <p className={styles.population}>
                        <span>Population:</span>{" "}
                        {country.population.toLocaleString("en")}
                      </p>
                      <p className={styles.region}>
                        <span>Region:</span> {country.region}
                      </p>
                      <p className={styles.capital}>
                        <span>Capital{capital.length > 1 ? "s" : ""}</span>:{" "}
                        {capital}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
