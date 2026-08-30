# Content Schema

## Course JSON

```json
{
  "slug": "a1",
  "level": "A1",
  "title": "German A1 Course",
  "hero": {
    "eyebrow": "Learn German A1 from Zero",
    "headline": "Build Your Strong Foundation in German",
    "description": "..."
  },
  "duration": "2–3 months",
  "fee": {
    "amount": 16000,
    "currency": "INR",
    "display": "₹16,000"
  },
  "entryRequirement": "No German knowledge required",
  "highlights": [],
  "sections": {
    "grammar": [],
    "vocabulary": [],
    "speaking": [],
    "writing": [],
    "listening": [],
    "reading": [],
    "examPreparation": []
  },
  "whoCanJoin": [],
  "skills": ["Lesen", "Hören", "Schreiben", "Sprechen"]
}
```

## Gallery JSON

```json
{
  "id": "sample-001",
  "title": "Sample gallery item",
  "image": "/images/gallery/sample.jpg",
  "alt": "Describe the image",
  "category": "classroom",
  "caption": ""
}
```

## Material JSON

```json
{
  "id": "sample-001",
  "title": "Sample learning material",
  "description": "",
  "type": "pdf",
  "url": "/documents/sample.pdf",
  "level": "A1",
  "available": false
}
```

## Site JSON

```json
{
  "name": "Fluent German Academy Hisar",
  "phones": ["9992620426", "8708410499"],
  "addressSource": "https://share.google/KtI45hX9CCfgsnAhN"
}
```

## Content Rules
- Slugs must be unique.
- IDs must be unique.
- Required fields must be present.
- Empty optional fields should be omitted or empty, not filled with invented content.
