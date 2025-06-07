# MERAKI TOUCH BRIDAL

A mobile-first, responsive bridal studio website built with semantic HTML, external CSS, and vanilla JavaScript. Designed to showcase custom gowns, fabrics, services, and testimonials in an elegant, user-friendly interface.



## 🎨 Color System

| Name          | Hex       | Usage                              |
|---------------|-----------|------------------------------------|
| **Soft Cream**    | `#fdfbfa` | Page background                     |
| **Charcoal**      | `#1a1a1a` | Body text                           |
| **Deep Plum**     | `#3b0a45` | Headings                            |
| **Orchid Pink**   | `#b85aa1` | Buttons, links                      |
| **Rose Blush**    | `#f3dce5` | Hero & accent section backgrounds   |
| **Mauve Accent**  | `#d63384` | Contact form highlights             |

**Rationale:**  
A soft, romantic palette evokes bridal elegance. Rose Blush and Mauve Accent add warmth; Deep Plum and Charcoal ensure clear contrast and readability.


## 📐 Breakpoint Logic

Built **mobile-first**—styles cascade upward from the smallest:

- **SM (≤480px):**  
  – Single-column stacking, full-width images, compact paddings  
  – Hamburger-style nav (flex-wrap)

- **MD (481–768px):**  
  – Switch to 2-column grids for galleries and services  
  – Buttons expand to full width for tap-friendly targets

- **LG (769–1024px):**  
  – Multi-column flex layouts for galleries, testimonials, services  
  – Expanded nav bar and balanced white space

- **XL (>1024px):**  
  – Full-width flex grids, side-by-side sections, desktop-style spacing

---

## ✨ Creative Divergences

- **Pinterest-Style Gallery:** Flexible card grid with subtle shadows and borders for gowns & fabrics.  
- **Animated Micro-Interactions:** Smooth button hover transitions and on-scroll fade-ins for testimonials.  
- **Custom Typography Pairing:** Elegant serif (`Playfair Display`) for headings; clean sans-serif (`Roboto`/`Noto Sans`) for text.  
- **Enhanced Form UX:** Focus-state outlines and smooth field animations improve user engagement.  
- **Responsive Nav Behavior:** Collapsed nav on SM/MD transforms into an expanded horizontal bar on LG/XL.

