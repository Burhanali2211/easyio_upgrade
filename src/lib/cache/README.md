# Caching System Documentation

## Overview

This application uses a comprehensive, multi-layered caching strategy to optimize performance and reduce database load.

## Cache Layers

### 1. React Server Component Cache (`cache()`)
- **Location**: `src/lib/data/fetch.ts`
- **Purpose**: Deduplicates requests during a single render
- **Duration**: Request lifetime
- **Use Case**: All data fetching functions

### 2. Next.js Data Cache (ISR)
- **Location**: Page-level `revalidate` exports
- **Purpose**: Static page generation with incremental revalidation
- **Duration**: Configurable per page/data type
- **Use Case**: All pages using data fetching

### 3. HTTP Cache Headers
- **Location**: API routes
- **Purpose**: Browser and CDN caching
- **Duration**: Varies by content type
- **Use Case**: All API responses

## Cache Strategies by Content Type

### Static Content (24 hours)
- Partners
- Team Members
- ERP Features
- Logic Engines

### Semi-Static Content (1 hour)
- Projects
- Solutions
- Innovation Hub
- Courses
- Programs

### Dynamic Content (5 minutes)
- Metrics
- Testimonials

### Real-time Content (1 minute)
- Website Settings (API)

## Cache Invalidation

### Automatic Invalidation
- Updates to website settings automatically invalidate related caches
- POST/PUT operations trigger cache invalidation

### Manual Invalidation
Use the revalidation API:

```bash
POST /api/revalidate
Authorization: Bearer YOUR_SECRET_TOKEN
Content-Type: application/json

{
  "type": "tag",
  "value": "projects"
}
```

Or:

```bash
{
  "type": "path",
  "value": "/"
}
```

## Cache Tags

Available cache tags (defined in `src/lib/cache/config.ts`):
- `partners`
- `metrics`
- `solutions`
- `projects`
- `project` (single project)
- `innovation-hub`
- `testimonials`
- `team-members`
- `courses`
- `programs`
- `erp-features`
- `logic-engines`
- `website-settings`

## HTTP Cache Headers

### Public Static Assets
```
Cache-Control: public, max-age=31536000, immutable
```
Used for: Images, fonts, static files

### Public with Revalidation
```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```
Used for: API responses, dynamic content

### No Cache
```
Cache-Control: no-store, no-cache, must-revalidate
```
Used for: POST responses, user-specific data

## Best Practices

1. **Use appropriate revalidate times** based on content update frequency
2. **Invalidate caches** when data is updated via POST/PUT
3. **Use cache tags** for selective invalidation
4. **Set proper HTTP headers** in API routes
5. **Monitor cache hit rates** to optimize strategies

## Troubleshooting

### Cache not updating?
1. Check if cache invalidation is being called
2. Verify cache tags are correct
3. Check revalidate times aren't too long
4. Clear CDN cache if using one

### Performance issues?
1. Review cache hit rates
2. Adjust revalidate times
3. Consider adding more cache layers
4. Check for cache stampedes (use stale-while-revalidate)

