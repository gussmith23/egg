use crate::Id;
use std::fmt::Debug;

#[derive(Debug, Clone, Default)]
pub struct UnionFind {
    parents: Vec<Id>,
}

impl UnionFind {
    pub fn make_set(&mut self) -> Id {
        let id = Id::from(self.parents.len());
        self.parents.push(id);
        id
    }

    fn parent(&self, query: Id) -> Id {
        self.parents[usize::from(query)]
    }

    fn parent_mut(&mut self, query: Id) -> &mut Id {
        &mut self.parents[usize::from(query)]
    }

    pub fn find(&self, mut current: Id) -> Id {
        while current != self.parent(current) {
            current = self.parent(current)
        }
        current
    }

    pub fn find_mut(&mut self, mut current: Id) -> Id {
        while current != self.parent(current) {
            let grandparent = self.parent(self.parent(current));
            *self.parent_mut(current) = grandparent;
            current = grandparent;
        }
        current
    }

    /// Returns (new_leader, old_leader)
    pub fn union(&mut self, root1: Id, root2: Id) -> Id {
        assert_eq!(root1, self.parent(root1));
        assert_eq!(root2, self.parent(root2));
        assert_ne!(root1, root2);
        *self.parent_mut(root2) = root1;
        root1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn ids(us: impl IntoIterator<Item = usize>) -> Vec<Id> {
        us.into_iter().map(|u| u.into()).collect()
    }

    #[test]
    fn union_find() {
        let n = 10;
        let id = |u: usize| Id::from(u);

        let mut uf = UnionFind::default();
        for _ in 0..n {
            uf.make_set();
        }

        // test the initial condition of everyone in their own set
        assert_eq!(uf.parents, ids(0..n));

        // build up one set
        uf.union(id(0), id(1));
        uf.union(id(0), id(2));
        uf.union(id(0), id(3));

        // build up another set
        uf.union(id(6), id(7));
        uf.union(id(6), id(8));
        uf.union(id(6), id(9));

        // this should compress all paths
        for i in 0..n {
            uf.find_mut(id(i));
        }

        // indexes:         0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        let expected = vec![0, 0, 0, 0, 4, 5, 6, 6, 6, 6];
        assert_eq!(uf.parents, ids(expected));
    }
}
