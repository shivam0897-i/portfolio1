import * as React from "react";

type HeroPortraitImage = {
  /** Fallback image source (png/jpg). */
  src: string;
  /** Optional responsive srcSet for the fallback format. */
  srcSet?: string;
  /** Optional responsive srcSet for webp. */
  webpSrcSet?: string;
  /** Sizes attribute for responsive selection. */
  sizes?: string;
  alt?: string;
};

type HeroPortraitProps = {
  name: string;
  caption: string;
  image?: HeroPortraitImage;
};

export const HeroPortrait = React.forwardRef<HTMLElement, HeroPortraitProps>(
  ({ name, caption, image }, ref) => {
    const initials = name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");

    return (
      <figure ref={ref} className="hero-portrait hover-scale animate-in fade-in duration-700">
        <div className="hero-portrait__frame" aria-hidden>
          <div className="hero-portrait__disc grain-surface">
            {image ? (
              <picture>
                {image.webpSrcSet ? (
                  <source type="image/webp" srcSet={image.webpSrcSet} sizes={image.sizes} />
                ) : null}
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  alt={image.alt ?? `${name} portrait`}
                  loading="eager"
                  decoding="async"
                  className="hero-portrait__image"
                />
              </picture>
            ) : (
              <span className="hero-portrait__initials">{initials}</span>
            )}
          </div>
        </div>

        <figcaption className="hero-portrait__caption">
          <p className="hero-portrait__label">FIELD NOTES</p>
          <p className="hero-portrait__text">{caption}</p>
        </figcaption>
      </figure>
    );
  },
);

HeroPortrait.displayName = "HeroPortrait";
