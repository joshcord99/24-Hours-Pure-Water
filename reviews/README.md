# Reviews Data

This folder contains Yelp reviews data for "24 Hours Pure Water" in Gardena, CA.

## Files

- `yelp_reviews.json` - Contains business information and all customer reviews

## Data Source

The data is fetched using the `scripts/yelp_reviews.py` script which uses SerpAPI to scrape Yelp reviews.

## Usage

The React app automatically imports this data to display reviews on:

- Home page reviews section
- Dedicated reviews page

## Updating Reviews

To fetch fresh reviews, run:

```bash
python scripts/yelp_reviews.py
```

This will update the `yelp_reviews.json` file with the latest reviews from Yelp.
