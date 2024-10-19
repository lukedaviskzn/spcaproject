<script>
    /** @type {import('./$types').PageData} */
	export let data;
</script>

<form action="/dogs/create" method="post">
    <input type="number" name="id" id="id">
    <input type="submit" value="Submit">
</form>
