(function() {var implementors = {};
implementors["egg"] = [{"text":"impl&lt;'a, L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Dot.html\" title=\"struct egg::Dot\">Dot</a>&lt;'a, L, N&gt;","synthetic":true,"types":["egg::dot::Dot"]},{"text":"impl&lt;L, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.EClass.html\" title=\"struct egg::EClass\">EClass</a>&lt;L, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::eclass::EClass"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.EGraph.html\" title=\"struct egg::EGraph\">EGraph</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"egg/trait.Analysis.html\" title=\"trait egg::Analysis\">Analysis</a>&lt;L&gt;&gt;::<a class=\"type\" href=\"egg/trait.Analysis.html#associatedtype.Data\" title=\"type egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::egraph::EGraph"]},{"text":"impl&lt;'a, CF, L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Extractor.html\" title=\"struct egg::Extractor\">Extractor</a>&lt;'a, CF, L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CF: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;CF as <a class=\"trait\" href=\"egg/trait.CostFunction.html\" title=\"trait egg::CostFunction\">CostFunction</a>&lt;L&gt;&gt;::<a class=\"type\" href=\"egg/trait.CostFunction.html#associatedtype.Cost\" title=\"type egg::CostFunction::Cost\">Cost</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::extract::Extractor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.AstSize.html\" title=\"struct egg::AstSize\">AstSize</a>","synthetic":true,"types":["egg::extract::AstSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.AstDepth.html\" title=\"struct egg::AstDepth\">AstDepth</a>","synthetic":true,"types":["egg::extract::AstDepth"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.FromOpError.html\" title=\"struct egg::FromOpError\">FromOpError</a>","synthetic":true,"types":["egg::language::FromOpError"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.RecExpr.html\" title=\"struct egg::RecExpr\">RecExpr</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::language::RecExpr"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"egg/enum.RecExprParseError.html\" title=\"enum egg::RecExprParseError\">RecExprParseError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::language::RecExprParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.SymbolLang.html\" title=\"struct egg::SymbolLang\">SymbolLang</a>","synthetic":true,"types":["egg::language::SymbolLang"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Pattern.html\" title=\"struct egg::Pattern\">Pattern</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::pattern::Pattern"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"egg/enum.ENodeOrVar.html\" title=\"enum egg::ENodeOrVar\">ENodeOrVar</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::pattern::ENodeOrVar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.SearchMatches.html\" title=\"struct egg::SearchMatches\">SearchMatches</a>","synthetic":true,"types":["egg::pattern::SearchMatches"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Rewrite.html\" title=\"struct egg::Rewrite\">Rewrite</a>&lt;L, N&gt;","synthetic":true,"types":["egg::rewrite::Rewrite"]},{"text":"impl&lt;C, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.ConditionalApplier.html\" title=\"struct egg::ConditionalApplier\">ConditionalApplier</a>&lt;C, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::rewrite::ConditionalApplier"]},{"text":"impl&lt;A1, A2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.ConditionEqual.html\" title=\"struct egg::ConditionEqual\">ConditionEqual</a>&lt;A1, A2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::rewrite::ConditionEqual"]},{"text":"impl&lt;L, N, IterData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Runner.html\" title=\"struct egg::Runner\">Runner</a>&lt;L, N, IterData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IterData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"egg/trait.Analysis.html\" title=\"trait egg::Analysis\">Analysis</a>&lt;L&gt;&gt;::<a class=\"type\" href=\"egg/trait.Analysis.html#associatedtype.Data\" title=\"type egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::run::Runner"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"egg/enum.StopReason.html\" title=\"enum egg::StopReason\">StopReason</a>","synthetic":true,"types":["egg::run::StopReason"]},{"text":"impl&lt;IterData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Iteration.html\" title=\"struct egg::Iteration\">Iteration</a>&lt;IterData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IterData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["egg::run::Iteration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.SimpleScheduler.html\" title=\"struct egg::SimpleScheduler\">SimpleScheduler</a>","synthetic":true,"types":["egg::run::SimpleScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.BackoffScheduler.html\" title=\"struct egg::BackoffScheduler\">BackoffScheduler</a>","synthetic":true,"types":["egg::run::BackoffScheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Var.html\" title=\"struct egg::Var\">Var</a>","synthetic":true,"types":["egg::subst::Var"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Subst.html\" title=\"struct egg::Subst\">Subst</a>","synthetic":true,"types":["egg::subst::Subst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Symbol.html\" title=\"struct egg::Symbol\">Symbol</a>","synthetic":true,"types":["egg::util::Symbol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"egg/struct.Id.html\" title=\"struct egg::Id\">Id</a>","synthetic":true,"types":["egg::Id"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()