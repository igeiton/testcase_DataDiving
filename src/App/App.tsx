// components
import Container from './UI/Container/Container';
import AddButton from './Users/AddUser/NewUser';
import Select from './Users/DeleteUsers/Select';
import Users from './Users/Users';

function App() {
    return (
        <>
            <Container>
                <>
                    <section className="flex justify-between items-start w-full">
                        <AddButton />

                        <Select />
                    </section>

                    <Users />
                </>
            </Container>
        </>
    );
}

export default App;
