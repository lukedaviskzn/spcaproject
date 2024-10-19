<script>
    /** @type {import('./$types').PageData} */
	export let data;
</script>

<form action="/dogs/create" method="post">
    Name
    <input type="text" name="name" id="name"/>
    <br>
    Image
    <input type="text" name="image"/>
    <br>

    Breed
    <input type="text" name="breed"/>

    <br>
    Bio
    <input type="text" name="bio"/>
    <br>
    Birth Date
    <input type="date" name="date_birth" />
    <br>

    Date of Gruesome death
    <input type="date" name="date_death"/>
    <br>
    <input type="submit" value="Submit">
</form>
