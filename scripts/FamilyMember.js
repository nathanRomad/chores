export const FamilyMember = (person, chores) => {
    return `
        <section class="familyMember">
            <header>
                <h4>${person.name}</h4>
            </header>
            <div>
                <ol>
                    ${
                        chores.map(chore => `<li>${chore.task}</li>`).join("")
                    }
                </ol>
            </div>
        </section>
    `
}