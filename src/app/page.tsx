"use client";

import { useState, useEffect } from "react";

interface Country {
  id: number;
  country: string;
  region: string;
  population: number;
  gdp: number;
}

interface NewCountry {
  country: string;
  region: string;
  population: number;
  gdp: number;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [newCountry, setNewCountry] = useState<NewCountry>({
    country: "",
    region: "",
    population: 0,
    gdp: 0
  });

  // Fetch all countries on load
  useEffect(() => {
    fetch("http://localhost:3000/api/objects")
      .then((res) => res.json())
      .then((data: Country[]) => setCountries(data));
  }, []);

  const handleFilter = async () => {
    const res = await fetch(`http://localhost:3000/api/object?country=${filter}`);
    const data: Country[] = await res.json();
    setCountries(data);
  };

  const handleAdd = async () => {
    const res = await fetch("http://localhost:3000/api/object", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCountry)
    });
    if (res.ok) {
      alert("Country added!");
    } else {
      alert("Failed to add country.");
    }
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Countries of the World</h1>

      {/* Filter */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search a country..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Countries List */}
      <ul className="mb-10 space-y-1">
        {countries.map((c) => (
          <li key={c.id} className="border-b py-1">
            <strong>{c.country}</strong> ({c.region}) - Pop: {c.population.toLocaleString()}, GDP: ${c.gdp}
          </li>
        ))}
      </ul>

      {/* Add New Country */}
      <h2 className="text-2xl font-semibold mb-2">Add new country</h2>
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <input
          type="text"
          placeholder="Country name"
          onChange={(e) => setNewCountry({ ...newCountry, country: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Region"
          onChange={(e) => setNewCountry({ ...newCountry, region: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Population"
          onChange={(e) => setNewCountry({ ...newCountry, population: parseInt(e.target.value) || 0 })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="GDP"
          onChange={(e) => setNewCountry({ ...newCountry, gdp: parseFloat(e.target.value) || 0 })}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="col-span-2 bg-green-600 text-white py-2 rounded"
        >
          Add country
        </button>
      </div>
    </main>
  );
}