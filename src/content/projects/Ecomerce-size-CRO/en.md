---
slug: Ecomerce-Sizes-CRO
locale: en
title: "E-commerce: Sizing and CRO Optimization"
shortTitle: E-commerce
summary: Research and improvements to the e-commerce user experience, focused on making size selection easier to increase conversion and reduce exchanges. The research and implementation were carried out with Andrea Bulla, who served as a mid-level UX Designer.
role: UX/UI Designer, Product Designer
duration: 3 months
status: published
featured: true
cover: images/crocs-sizes-cover.png
tags: [Research, UI, UX research, CRO]
tools: [Figma, Microsoft Clarity, Google Analytics]
nextSlug: payment-app
order: 3
---

## Context

The UX team was asked to investigate weak sales performance in the Crocs e-commerce store. Data showed a bottleneck between total sessions, sessions with purchase intent (products added to the cart), and sessions that reached checkout.

### Stakeholder needs

Stakeholders needed us to identify the friction preventing users from completing purchases and find opportunities to improve the shopping experience.

## Research

### Understanding data and user behavior

To understand the problem, we needed to learn how people behaved on the website. We investigated it from two angles:

1. **Website analytics:** We conducted a quantitative analysis of the previous month's traffic using platforms connected to the e-commerce store, including Google Analytics and Microsoft Clarity.

   * **Funnel analysis:** We found that the funnel had a high drop-off around the cart, with approximately 93% of users leaving the funnel.

   ![Crocs conversion funnel](/images/Funnel%20crocs%20col.png)

   * **Reverse path analysis:** We also wanted to identify the key steps taken by people who reached checkout, and compare them with the paths that led to drop-off. We analyzed paths in reverse to understand which visitors found a product and converted. The path showed that people who reached the payment screen almost always completed their purchase, placing the main drop-off at the point of adding a product to the cart from the product detail page (PDP).

   ![Reverse funnel path analysis](/images/Arbol%20de%20funnel.png)

2. **The voice of the user:** We designed and ran a series of surveys placed throughout the funnel to capture users' frustrations, pain points, and needs at each stage of the purchase process. We also interviewed customer service staff.

   * **Post-purchase frustrations:** The first survey explored whether people's recollection could reveal the point of greatest friction in their experience. Customers placed greater importance on incentives, such as discounts, additional products, or other offers that could help make completing a purchase feel worthwhile.
   * **Unresolved checkout needs:** Users found it confusing to apply discounts to specific product references. They said prices seemed to change when the products they had selected did not qualify for the promotions they expected.
   * **Unresolved cart friction:** People who reached the cart did not find enough reason to complete their purchase. Although the payment methods worked, they did not provide the perceived benefit users expected; some wanted a discount to be available at checkout. Others wanted more flexible payment options, such as better installment offers. To a lesser extent, some felt unsure because product information was limited.
   * **Questions when adding a product:** Most users found Crocs sizing confusing and were dissatisfied when choosing a size. Although the size guide answered questions about measurements, size selection remained the main pain point. This matched the drop-off found in the quantitative funnel analysis.
   * **Differences in customers' foot shape:** Customer service staff told us that, when handling Crocs exchanges and returns, they often had to explain the fit of each Crocs style to customers. Their experience advising customers showed that foot length alone was not enough: some customers have wide feet and others narrow feet, so the same foot length did not always correspond to the same fit or size.

## What we did

### Structuring the solution

Based on the research insights, we defined an action plan with two focus areas:

1. **Improve the size selection process:**
   - Present the size guide clearly and make it easier to use.
   - Make the measurements for each size easier to recognize, reducing the chance of choosing the wrong size.
   - Use one size display standard, EUR, instead of showing several standards at once.

2. **Make footwear fit easier to identify:**
   - Create labels that help users identify wide or narrow fits by Crocs style, making it easier to choose the right size.

### Validating the proposal

We first tested the solutions with proxy users whose demographic profiles were similar to those of the survey respondents. After addressing weaknesses in the proposal, we moved to a production test to monitor return indicators.

## Results

1. **Improve the size selection process:**

   The switch to the EUR sizing system, implemented in February, showed measurable results across several indicators:

   * **Size-related return rate:** The rate of returns due to sizing decreased by 11.38%, from 13.27% (Nov–Jan) to *11.76% (Feb–Apr)*.
   * **Clicks on the size selector:** +33% (24,425 → 32,893 clicks over the same periods).
   * **Rage clicks:** -14% (0.43% → 0.37% over the same periods).
   * **Dead clicks:** -14% (14.71% → 12.71% over the same periods).

   <video controls playsinline preload="metadata" style="width: 100%; height: auto;">
  <source src="/images/uso%20de%20tallas%20europeas.mp4" type="video/mp4">
  Your browser cannot play this video.
</video>

2. **Make footwear fit easier to identify:**

We built a feature that indicates the fit to consider when buying, based on the Crocs style being viewed.

**Figma mockup**

![Crocs footwear fit](/images/ajuste%20de%20horma%20de%20crocs.png)

**Prototype**

Try the fit, size, and color selectors, view the size guide, and explore the purchase actions. This demo does not process orders.

<div style="width: 100%; max-width: 590px; aspect-ratio: 590 / 1224; margin: 1.5rem auto; overflow: hidden; border: 1px solid #d8d3c8; background: #fff;">
  <iframe
    title="Interactive Crocs size selection prototype"
    src="/prototypes/crocs-size-selector.html?lang=en"
    style="width: 100%; height: 100%; border: 0;"
    loading="lazy">
  </iframe>
</div>

This feature is still being tested. Results are expected after the discount season ends in November, when we can assess the number of returns attributed to this issue. The test ends on November 30, 2026.

## Learnings

Global sizing standards that work in other markets need to be adapted to the needs of the target market. Even small size variations can strongly affect how users perceive the fit, conversion rates, product returns, CRO, and the overall user journey.
