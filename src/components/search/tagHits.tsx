import React from "react";
import { css } from "@emotion/react";
import { connectHits } from "react-instantsearch-dom";
import TagHit from "./tagHit";

const TagHits = ({ hits }: any) => (
  <>
    <h3>Tags</h3>
    {hits.length > 0 ? (
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {hits.slice(0, 12).map((hit: any) => (
          <li
            key={hit.objectID}
            css={css`
              margin-bottom: 0.5rem;
              margin-top: 0.5rem;
              width: 100%;

              @media (max-width: 768px) {
                width: 50%;
              }
            `}
          >
            <TagHit hit={hit} />
          </li>
        ))}
      </ul>
    ) : (
      <small>
        <em>No matching results</em>
      </small>
    )}
  </>
);

const ConnectedTagHits = connectHits(TagHits);

export default ConnectedTagHits;
