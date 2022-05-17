export function asEuro(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function serializeSchema(data = {}) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

export function checkExternalLinks( event ){
	let anchor = event.target.closest('a');
	if( anchor && anchor.href ){
    let url = new URL( anchor.href );
    if( url.host !== window.location.host ){
        window.open( anchor.href, '_blank' );
        event.preventDefault();
        return;
    }
	}
}
