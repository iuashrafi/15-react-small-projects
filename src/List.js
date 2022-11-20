import React from "react";

const List = (props) => {
  const arr = props.people;
  return (
    <>
      <h2>list component</h2>
      {arr.map((person) => {
        const { id, name, image, age } = person;

        return (
          <article key={id} className="person">
            <img src="{image}" alt="{name}" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
