<script>
    /** @type {import('./$types').PageData} */
	export let data;
</script>

<form action="/dogs/create" method="post">
    Name
    <input style="color:black" type="text" name="name" id="name"/>
    <br>
    Image
    <input style="color:black" type="text" name="image"/>
    <br>
    Hobby
    <input style="color:black" type= 'text' name='hobby'/>
    Type
    <input style="color:black" type="text" name="type"/>
    <br>
    Breed
    <input style="color:black" type="text" name="breed"/>
    <br>
    Bio
    <input style="color:black" type="text" name="bio"/>
    <br>
    Birth Date
    <input style="color:black" type="date" name="date_birth" />
    <br>
    Date of Gruesome death
    <input style="color:black" type="date" name="date_death"/>
    <br>
    <input type="submit" value="Submit">

</form>
