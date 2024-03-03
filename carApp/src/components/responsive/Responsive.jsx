import React from "react";

const Responsive = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left sm:max-xl:bg-blue-50 ">
      <div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-2206.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="mb-2 text-4xl font-medium text-center ">Headline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum
          molestiae vero, ratione sed dignissimos autem repellendus accusantium
          porro quia similique dolorem beatae totam fugit? Ab veniam dolore,
          amet recusandae ad odio eligendi quisquam voluptatum.
        </p>
      </div>
    </section>
  );
};

export default Responsive;
