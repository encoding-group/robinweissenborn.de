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
