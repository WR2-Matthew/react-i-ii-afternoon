delete from people
where user_id = $1;

returning *