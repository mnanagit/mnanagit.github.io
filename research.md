---
layout: page
title: Research
permalink: /research
---

## Research Publications

{% for paper in site.research reversed %}
<div class="research-item">
  <h3>{{ paper.title }}</h3>
  <p class="meta">
    <em>{{ paper.date | date: "%B %Y" }}</em>
  </p>
  <div class="abstract">
    <strong>Abstract</strong>: {{ paper.abstract }}
  </div>
  {% if paper.download %}
    <a href="{{ paper.download }}" class="btn" target="_blank">Download PDF</a>
  {% endif %}
</div>
<hr>
{% endfor %}